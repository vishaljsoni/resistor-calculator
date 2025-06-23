using System;
using System.Collections.Generic;
using System.Text;

namespace ResistorRating.Library.Models
{
    public class CalculatedOhmForResistor
    {
        public double MinimumOhm { get; set; }
        public double MaximumOhm { get; set; }
        public double ActualOhm { get; set; }
    }
}
