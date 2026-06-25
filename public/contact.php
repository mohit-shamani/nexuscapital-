<?php
/**
 * Nexus Capital — contact form handler.
 *
 * Receives the enquiry form (POST) and delivers it to the firm's mailbox.
 * Because the recipient mailbox is hosted on the same Hostinger server,
 * PHP's mail() delivers locally and reliably — no SMTP credentials needed.
 *
 * Edit the two CONFIG values below if the address ever changes.
 */

// ---- CONFIG ---------------------------------------------------------------
$RECIPIENT = 'info@nexuscapital.in';                 // where enquiries land
$FROM      = 'website@nexuscapital.in';              // a real address on your domain
// ---------------------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');

// Only accept POST.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Honeypot: real users leave this empty; bots fill everything in.
if (!empty($_POST['botcheck'])) {
    // Pretend success so bots move on, but send nothing.
    echo json_encode(['success' => true, 'message' => 'Thank you.']);
    exit;
}

// Collect and trim inputs.
$first       = trim($_POST['first_name']  ?? '');
$last        = trim($_POST['last_name']   ?? '');
$institution = trim($_POST['institution'] ?? '');
$email       = trim($_POST['email']       ?? '');
$message     = trim($_POST['message']     ?? '');

// Validate.
$errors = [];
if ($first === '')       $errors[] = 'first name';
if ($last === '')        $errors[] = 'last name';
if ($institution === '') $errors[] = 'institution';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'a valid work email';

if ($errors) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide ' . implode(', ', $errors) . '.',
    ]);
    exit;
}

// Strip newlines from header-bound fields to prevent header injection.
$clean = function ($v) {
    return str_replace(["\r", "\n", "%0a", "%0d"], '', $v);
};
$first = $clean($first);
$last  = $clean($last);
$email = $clean($email);

$name = "$first $last";

// Build the email body.
$body  = "New enquiry from the Nexus Capital website\n";
$body .= "------------------------------------------\n\n";
$body .= "Name:        $name\n";
$body .= "Institution: $institution\n";
$body .= "Work email:  $email\n\n";
$body .= "Message:\n" . ($message !== '' ? $message : '(none provided)') . "\n";

$subject = "Website enquiry — $name";

// Headers: From must be an address on your own domain; Reply-To is the visitor.
$headers  = "From: Nexus Capital Website <$FROM>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($RECIPIENT, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you.']);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to send right now. Please email info@nexuscapital.in directly.',
    ]);
}
