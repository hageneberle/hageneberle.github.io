<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Change the recipient email address to your desired email address
        $recipient = "contact@fondationtschuess.org";
        $subject = "New Newsletter Subscription";
        $message = "A new subscriber wants to join your newsletter.\n\nEmail: $email";
        $headers = "From: $email";

        if (mail($recipient, $subject, $message, $headers)) {
            // Subscription successful
            echo "Thank you for subscribing to our newsletter!";
        } else {
            // Error sending email
            echo "Sorry, there was an issue with the subscription. Please try again later.";
        }
    } else {
        // Invalid email address
        echo "Invalid email address. Please provide a valid email.";
    }
} else {
    // Accessing the script directly is not allowed
    header("HTTP/1.1 403 Forbidden");
    echo "Access forbidden.";
}
?>
