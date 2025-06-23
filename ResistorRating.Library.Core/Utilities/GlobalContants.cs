using ResistorRating.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ResistorRating.Library.Utilities
{
    public class GlobalContants
    {
        public static IList<ElectronicColorRing> AllElectricRings = new List<ElectronicColorRing>
        {
            new ElectronicColorRing { RingName = RingName.None, RingDisplayValue=RingName.None.ToString(), RingCode = "NA", Multiplier = null, SignificantFigure = null, TolerancePercent = 20},
            new ElectronicColorRing { RingName = RingName.Pink, RingDisplayValue=RingName.Pink.ToString(), RingCode = "PK", Multiplier = Math.Pow(10,-3), SignificantFigure = null, TolerancePercent = null},
            new ElectronicColorRing { RingName = RingName.Silver, RingDisplayValue=RingName.Silver.ToString(), RingCode = "SR", Multiplier = Math.Pow(10,-2), SignificantFigure = null, TolerancePercent = 10},
            new ElectronicColorRing { RingName = RingName.Gold, RingDisplayValue=RingName.Gold.ToString(), RingCode = "GD", Multiplier = Math.Pow(10,-1), SignificantFigure = null, TolerancePercent = 5},
            new ElectronicColorRing { RingName = RingName.Black, RingDisplayValue=RingName.Black.ToString(), RingCode = "BK", Multiplier = Math.Pow(10,0), SignificantFigure = (int)RingName.Black, TolerancePercent = null},
            new ElectronicColorRing { RingName = RingName.Brown, RingDisplayValue=RingName.Brown.ToString(), RingCode = "BN", Multiplier = Math.Pow(10,1), SignificantFigure = (int)RingName.Brown, TolerancePercent = 1},
            new ElectronicColorRing { RingName = RingName.Red, RingDisplayValue=RingName.Red.ToString(), RingCode = "RD", Multiplier = Math.Pow(10,2), SignificantFigure = (int)RingName.Red, TolerancePercent = 2},
            new ElectronicColorRing { RingName = RingName.Orange, RingDisplayValue=RingName.Orange.ToString(), RingCode = "OG", Multiplier = Math.Pow(10,3), SignificantFigure = (int)RingName.Orange, TolerancePercent = null},
            new ElectronicColorRing { RingName = RingName.Yellow, RingDisplayValue=RingName.Yellow.ToString(), RingCode = "YE", Multiplier = Math.Pow(10,4), SignificantFigure = (int)RingName.Yellow, TolerancePercent = 5},
            new ElectronicColorRing { RingName = RingName.Green, RingDisplayValue=RingName.Green.ToString(), RingCode = "GN", Multiplier = Math.Pow(10,5), SignificantFigure = (int)RingName.Green, TolerancePercent = 0.5},
            new ElectronicColorRing { RingName = RingName.Blue, RingDisplayValue=RingName.Blue.ToString(), RingCode = "BU", Multiplier = Math.Pow(10,6), SignificantFigure = (int)RingName.Blue, TolerancePercent = 0.25},
            new ElectronicColorRing { RingName = RingName.Violet, RingDisplayValue=RingName.Violet.ToString(), RingCode = "VT", Multiplier = Math.Pow(10,7), SignificantFigure = (int)RingName.Violet, TolerancePercent = 0.1},
            new ElectronicColorRing { RingName = RingName.Gray, RingDisplayValue=RingName.Gray.ToString(), RingCode = "GY", Multiplier = Math.Pow(10,8), SignificantFigure = (int)RingName.Gray, TolerancePercent = 0.05},
            new ElectronicColorRing { RingName = RingName.White, RingDisplayValue=RingName.White.ToString(), RingCode = "WH", Multiplier = Math.Pow(10,9), SignificantFigure = (int)RingName.White, TolerancePercent = null}
        };
    }
}
