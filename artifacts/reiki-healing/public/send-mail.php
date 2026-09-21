<?php
/**
 * Contact form mail endpoint for the Aura Healz site.
 *
 * The React form POSTs JSON here; this script emails it to the address in
 * $TO below. It lives next to index.html, so it is reachable at the same
 * folder as the site (e.g. /v1/send-mail.php) on IONOS hosting, which runs PHP.
 */

$TO       = 'archana@aurahealz.com';
// Must be an address on your own domain, or IONOS will reject the mail.
$FROM     = 'noreply@aurahealz.com';
$SITENAME = 'Aura Healz';

header('Content-Type: application/json; charset=utf-8');

function fail($message, $status = 400) {
    http_response_code($status);
    echo json_encode(['ok' => false, 'error' => $message]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fail('Method not allowed.', 405);
}

// Accept JSON (what the React form sends) or normal form posts.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name    = trim((string) ($data['name'] ?? ''));
$email   = trim((string) ($data['email'] ?? ''));
$session = trim((string) ($data['session'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));
$honey   = trim((string) ($data['website'] ?? '')); // hidden anti-spam field

// Bots fill every field, including hidden ones. Pretend success so they move on.
if ($honey !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

if ($name === '' || $email === '' || $message === '') {
    fail('Please fill in your name, email and message.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail('Please enter a valid email address.');
}
if (mb_strlen($name) > 120 || mb_strlen($email) > 160 || mb_strlen($message) > 5000) {
    fail('That message is too long.');
}

// Header injection guard: no newlines allowed in anything used in a header.
$clean = static fn(string $v): string => str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v);
$name    = $clean($name);
$email   = $clean($email);
$session = $clean($session);

$subject = 'Website enquiry from ' . $name;
$body    = "New message from the {$SITENAME} website\n\n"
         . "Name:    {$name}\n"
         . "Email:   {$email}\n"
         . "Session: " . ($session !== '' ? $session : 'Not specified') . "\n"
         . "Sent:    " . date('d M Y, H:i') . "\n\n"
         . "Message:\n{$message}\n";

$headers = [
    'From: ' . $SITENAME . ' <' . $FROM . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',   // replying goes to the visitor
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($TO, $subject, $body, implode("\r\n", $headers), '-f' . $FROM);

if (!$sent) {
    fail('The message could not be sent right now. Please email ' . $TO . ' directly.', 500);
}

echo json_encode(['ok' => true]);
