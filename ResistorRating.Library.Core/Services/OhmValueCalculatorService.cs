using ResistorRating.Library.Contracts;
using ResistorRating.Library.Models;
using static ResistorRating.Library.Utilities.GlobalContants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ResistorRating.Library.Exceptions;

namespace ResistorRating.Library.Services
{
    public class OhmValueCalculatorService : IOhmValueCalculator
    {
        public CalculatedOhmForResistor CalculateOhmValue(string bandACode, string bandDCode, string bandBCode = "", string bandCCode = "")
        {
            var bandA = FindElectronicColorRingThroughCode(bandACode);
            var bandB = FindElectronicColorRingThroughCode(bandBCode);
            var bandC = FindElectronicColorRingThroughCode(bandCCode);
            var bandD = FindElectronicColorRingThroughCode(bandDCode);

            if (bandA == null)
            {
                throw new BandNotFoundException(bandACode, "Band A");
            }
            if (bandD == null)
            {
                throw new BandNotFoundException(bandDCode, "Band D");
            }
            if (!string.IsNullOrEmpty(bandBCode) && bandB == null)
            {
                throw new BandNotFoundException(bandBCode, "Band B");
            }
            if (!string.IsNullOrEmpty(bandCCode) && bandC == null)
            {
                throw new BandNotFoundException(bandCCode, "Band C");
            }

            if (!IsColorRingCorrectForBand(bandA, BandName.BandA))
            {
                throw new WrongColorBandSelectedException(bandA.RingName, "Band A");
            }
            if (!IsColorRingCorrectForBand(bandD, BandName.BandD))
            {
                throw new WrongColorBandSelectedException(bandD.RingName, "Band D");
            }
            if (!string.IsNullOrEmpty(bandBCode) && !IsColorRingCorrectForBand(bandB, BandName.BandB))
            {
                throw new WrongColorBandSelectedException(bandB.RingName, "Band B");
            }
            if (!string.IsNullOrEmpty(bandCCode) && !IsColorRingCorrectForBand(bandC, BandName.BandC))
            {
                throw new WrongColorBandSelectedException(bandC.RingName, "Band C");
            }
            

            var ohmValue = CalculateOhmValue(bandA, bandB, bandC);
            var returnObject = new CalculatedOhmForResistor
            {
                MinimumOhm = ohmValue - (ohmValue * bandD.TolerancePercent.Value / 100),
                MaximumOhm = ohmValue + (ohmValue * bandD.TolerancePercent.Value / 100),
                ActualOhm = ohmValue
            };
            return returnObject;
        }
        
        private ElectronicColorRing FindElectronicColorRingThroughCode(string ringCode)
        {
            return AllElectricRings.FirstOrDefault(er => er.RingCode.ToLower() == ringCode.ToLower());
        }

        private bool IsColorRingCorrectForBand(ElectronicColorRing bandToCheck, BandName bandToVerify)
        {
            switch (bandToVerify)
            {
                case BandName.BandA:
                case BandName.BandB:
                    return bandToCheck.SignificantFigure != null;
                case BandName.BandC:
                    return bandToCheck.Multiplier != null;
                case BandName.BandD:
                    return bandToCheck.TolerancePercent != null;
                default:
                    return false;
            }
        }

        private double CalculateOhmValue(ElectronicColorRing bandA, ElectronicColorRing bandB, ElectronicColorRing bandC)
        {
            double returnValue = 0;
            returnValue = bandA.SignificantFigure.Value;

            if (bandB != null)
            {
                returnValue = bandA.SignificantFigure.Value * 10 + bandB.SignificantFigure.Value;
            }
            if (bandC != null)
            {
                returnValue = (bandA.SignificantFigure.Value * 10 + bandB.SignificantFigure.Value) * bandC.Multiplier.Value;
            }

            return returnValue;
        }
    }
}
