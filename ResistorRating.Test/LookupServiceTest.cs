using System.Linq;
using Xunit;

namespace ResistorRating.Test
{
    public class LookupServiceTest : TestBase
    {
        [Fact]
        public void LookupServiceExists()
        {
            Assert.NotNull(LookupService);
        }

        [Fact]
        public void LookupServiceHasData()
        {
            Assert.True(LookupService.GetAllColorRingTypes().ToList().Count > 0);
        }
    }
}
