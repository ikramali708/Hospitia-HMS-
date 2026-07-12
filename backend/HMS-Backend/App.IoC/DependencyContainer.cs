using App.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using App.Data.Repositories;
using App.Domain.Interfaces;
using App.Core.Interfaces;
using App.Core.Services;
using App.Core.Mappings;

namespace App.IoC;

public static class DependencyContainer
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseSqlServer(
                configuration.GetConnectionString("DefaultConnection"));
        });

        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IRoomService, RoomService>();

        services.AddAutoMapper(typeof(AutoMapperProfile));

        return services;
    }
}