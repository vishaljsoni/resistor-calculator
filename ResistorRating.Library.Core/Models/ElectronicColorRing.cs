using System;

namespace ResistorRating.Library.Models
{
    public class ElectronicColorRing
    {
        public RingName RingName { get; set; }
        public string RingDisplayValue { get; set; }
        public string RingCode { get; set; }
        public int? SignificantFigure { get; set; }
        public Double? Multiplier { get; set; }
        public Double? TolerancePercent { get; set; }
    }

    public enum RingName
    {
        None = -4,
        Pink = -3,
        Silver = -2,
        Gold = -1,
        Black = 0,
        Brown = 1,
        Red = 2,
        Orange = 3,
        Yellow = 4,
        Green = 5,
        Blue = 6,
        Violet = 7,
        Gray = 8,
        White = 9
    }

    public enum BandName
    {
        BandA,
        BandB,
        BandC,
        BandD
    }
}
