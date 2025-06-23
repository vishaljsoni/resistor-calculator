using System;
using System.Collections.Generic;
using System.Text;

namespace ResistorRating.Library.Exceptions
{
    public class BandNotFoundException: Exception
    {
        public string ExceptionMessage { get; set; }
        public BandNotFoundException(string ringCode, string ringBandName)
        {
            ExceptionMessage = $"{ringCode} ring code is not a color band for a ring band {ringBandName}";
        }
    }
}
