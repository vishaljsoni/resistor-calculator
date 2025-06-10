using Microsoft.Extensions.DependencyInjection;
using ResistorRating.Library;
using ResistorRating.Library.Contracts;

namespace ResistorRating.Test
{
    public class TestBase
    {
        private ServiceProvider? _serviceProvider;
        protected ServiceProvider ServiceProvider
        {
            get
            {
                if (_serviceProvider == null)
                {
                    var services = new ServiceCollection();
                    services.AddResistorRatingServices();
                    _serviceProvider = services.BuildServiceProvider();
                }

                return _serviceProvider;
            }
        }

        protected ILookupService LookupService
        {
            get
            {
                return ServiceProvider.GetRequiredService<ILookupService>();
            }
        }

        protected IOhmValueCalculator OhmValueCalculatorService
        {
            get
            {
                return ServiceProvider.GetRequiredService<IOhmValueCalculator>();
            }
        }
    }
}

