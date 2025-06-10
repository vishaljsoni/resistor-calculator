using Microsoft.Extensions.DependencyInjection;
using ResistorRating.Library.Contracts;
using ResistorRating.Library.Services;

namespace ResistorRating.Library
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddResistorRatingServices(this IServiceCollection services)
        {
            services.AddScoped<ILookupService, LookupService>();
            services.AddScoped<IOhmValueCalculator, OhmValueCalculatorService>();
            return services;
        }
    }
}
