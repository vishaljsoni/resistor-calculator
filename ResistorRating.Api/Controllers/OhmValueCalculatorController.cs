using Microsoft.AspNetCore.Mvc;
using ResistorRating.Library.Contracts;
using ResistorRating.Library.Exceptions;
using ResistorRating.Library.Models;

namespace ResistorRating.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OhmValueCalculatorController : ControllerBase
    {
        private readonly IOhmValueCalculator _ohmValueCalculatorService;

        public OhmValueCalculatorController(IOhmValueCalculator ohmValueCalculator)
        {
            _ohmValueCalculatorService = ohmValueCalculator;
        }

        [HttpGet("{bandACode}/{bandDCode}/{bandBCode?}/{bandCCode?}")]
        public ActionResult<CalculatedOhmForResistor> GetOhmValueWithTolerance(string bandACode, string bandDCode, string bandBCode = "", string bandCCode = "")
        {
            try
            {
                var result = _ohmValueCalculatorService.CalculateOhmValue(bandACode, bandDCode, bandBCode, bandCCode);
                return Ok(result);
            }
            catch (BandNotFoundException ex)
            {
                return BadRequest(ex.ExceptionMessage);
            }
            catch (WrongColorBandSelectedException ex)
            {
                return BadRequest(ex.ExceptionMessage);
            }
        }
    }
}
