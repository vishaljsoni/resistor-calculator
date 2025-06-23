using ResistorRating.Library.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ResistorRating.Library.Exceptions
{
    public class WrongColorBandSelectedException: Exception
    {
        public string ExceptionMessage { get; set; }
        public WrongColorBandSelectedException(RingName ringName, string ringBandName)
        {
            ExceptionMessage = $"{ringName.ToString()} band is a wrong color band for a ring band {ringBandName}";
        }
    }
}
