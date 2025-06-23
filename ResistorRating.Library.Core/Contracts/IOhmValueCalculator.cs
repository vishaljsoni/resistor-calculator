using ResistorRating.Library.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ResistorRating.Library.Contracts
{
    public interface IOhmValueCalculator
    {
        CalculatedOhmForResistor CalculateOhmValue(string bandACode, string bandDCode, string bandBCode = "", string bandCCode = "");

    }
}
