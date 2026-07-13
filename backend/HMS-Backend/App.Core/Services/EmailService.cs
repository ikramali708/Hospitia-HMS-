using App.Core.Interfaces;
using App.Core.Settings;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Mail;

namespace App.Core.Services;

public class EmailService : IEmailService
{
    private readonly EmailSettings _settings;

    public EmailService(
        IOptions<EmailSettings> settings)
    {
        _settings = settings.Value;
    }

    public async Task SendEmailAsync(
        string to,
        string subject,
        string body)
    {
        using var client = new SmtpClient(
            _settings.Host,
            _settings.Port);

        client.EnableSsl = true;

        client.Credentials =
            new NetworkCredential(
                _settings.Username,
                _settings.Password);

        var mail = new MailMessage
        {
            From = new MailAddress(
                _settings.SenderEmail,
                _settings.SenderName),

            Subject = subject,

            Body = body,

            IsBodyHtml = true
        };

        mail.To.Add(to);

        await client.SendMailAsync(mail);
    }
}