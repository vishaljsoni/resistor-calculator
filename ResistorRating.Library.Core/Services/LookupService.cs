using ResistorRating.Library.Contracts;
using ResistorRating.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using static ResistorRating.Library.Utilities.GlobalContants;

namespace ResistorRating.Library.Services
{
    public class LookupService : ILookupService
    {
        public IQueryable<ElectronicColorRing> GetAllColorRingTypes() => AllElectricRings.AsQueryable();
    }
}
