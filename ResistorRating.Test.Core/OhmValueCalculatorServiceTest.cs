using System.Collections.Generic;
using System.Linq;
using Xunit;
using ResistorRating.Library.Exceptions;
using ResistorRating.Library.Models;

namespace ResistorRating.Test.Core
{
    public class OhmValueCalculatorServiceTest : TestBase
    {
        private readonly IList<ElectronicColorRing> allRingTypes;

        public OhmValueCalculatorServiceTest() : base()
        {
            this.allRingTypes = LookupService.GetAllColorRingTypes().ToList();
        }

        [Fact]
        public void OhmValueCalculatorServiceExists()
        {
            Assert.NotNull(OhmValueCalculatorService);
        }

        [Fact]
        public void ShouldGetActualValueZero()
        {
            var blackRingCode = allRingTypes.First(rt => rt.RingName == RingName.Black).RingCode;
            var noneResistanceRingCode = allRingTypes.First(rt => rt.RingName == RingName.None).RingCode;
            Assert.True(OhmValueCalculatorService.CalculateOhmValue(blackRingCode, noneResistanceRingCode).ActualOhm == 0);
        }

        [Fact]
        public void ShouldGetActualValueTen()
        {
            var brownRingCode = allRingTypes.First(rt => rt.RingName == RingName.Brown).RingCode;
            var blackRingCode = allRingTypes.First(rt => rt.RingName == RingName.Black).RingCode;
            var noneResistanceRingCode = allRingTypes.First(rt => rt.RingName == RingName.None).RingCode;
            Assert.True(OhmValueCalculatorService.CalculateOhmValue(brownRingCode, noneResistanceRingCode, blackRingCode, blackRingCode).ActualOhm == 10);
        }

        [Fact]
        public void ShouldGetBandNotFoundException()
        {
            var brownRingCode = allRingTypes.First(rt => rt.RingName == RingName.Brown).RingCode;
            var blackRingCode = allRingTypes.First(rt => rt.RingName == RingName.Black).RingCode;
            var noneResistanceRingCode = allRingTypes.First(rt => rt.RingName == RingName.None).RingCode;
            Assert.Throws<BandNotFoundException>(() => 
                OhmValueCalculatorService.CalculateOhmValue("DE", noneResistanceRingCode, blackRingCode, blackRingCode));
        }

        [Fact]
        public void ShouldGetWrongColorBandSelectedException()
        {
            var pinkRingCode = allRingTypes.First(rt => rt.RingName == RingName.Pink).RingCode;
            var blackRingCode = allRingTypes.First(rt => rt.RingName == RingName.Black).RingCode;
            var noneResistanceRingCode = allRingTypes.First(rt => rt.RingName == RingName.None).RingCode;
            Assert.Throws<WrongColorBandSelectedException>(() => 
                OhmValueCalculatorService.CalculateOhmValue(pinkRingCode, noneResistanceRingCode, blackRingCode, blackRingCode));
        }

        [Fact]
        public void ShouldGetActualValuePointTwoWithMinAndMax()
        {
            var redRingCode = allRingTypes.First(rt => rt.RingName == RingName.Red).RingCode;
            var blackRingCode = allRingTypes.First(rt => rt.RingName == RingName.Black).RingCode;
            var silverRingCode = allRingTypes.First(rt => rt.RingName == RingName.Silver).RingCode;
            var yellowResistanceRingCode = allRingTypes.First(rt => rt.RingName == RingName.Yellow).RingCode;

            var calculatedValue = OhmValueCalculatorService.CalculateOhmValue(redRingCode, yellowResistanceRingCode, blackRingCode, silverRingCode);
            Assert.True(calculatedValue.ActualOhm == 0.2);
            Assert.True(calculatedValue.MinimumOhm == 0.19);
            Assert.True(calculatedValue.MaximumOhm > 0.2 && calculatedValue.MaximumOhm < 0.22); // for double type, we need to add tolerance in assert.
        }
    }
}
