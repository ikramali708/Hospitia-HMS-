using App.Core.Helpers;
using App.Data.Contexts;
using App.Domain.Entities;

namespace App.Data.Seed;

public static class AdminSeeder
{
    public static async Task SeedAsync(ApplicationDbContext context)
    {
        if (context.Admins.Any())
            return;

        var admin = new Admin
        {
            Name = "System Admin",
            CNIC = "35202-1234567-1",
            Email = "admin@hotel.com",
            PasswordHash = PasswordHasher.Hash("Admin@123"),
            IsActive = true,
            IsEmailVerified = true
        };

        context.Admins.Add(admin);

        await context.SaveChangesAsync();
    }
}