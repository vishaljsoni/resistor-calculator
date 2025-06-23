using ResistorRating.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ResistorRating.Library.Contracts
{
    public interface ILookupService
    {
        IQueryable<ElectronicColorRing> GetAllColorRingTypes();
    }
}
