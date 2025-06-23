using ResistorRating.Library.Contracts;
using ResistorRating.Library.Services;

namespace ResistorRating.Test.Core
{
    public class TestBase
    {
        protected ILookupService LookupService { get; }
        protected IOhmValueCalculator OhmValueCalculatorService { get; }

        public TestBase()
        {
            LookupService = new LookupService();
            OhmValueCalculatorService = new OhmValueCalculatorService();
        }
    }
}

