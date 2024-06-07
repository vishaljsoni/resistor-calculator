// Conversion of Angular service to React service
class LookupService {

  getBandAOrBRings(allBands) {
    return allBands.filter(ecr => ecr.SignificantFigure !== null);
  }

  getBandCRings(allBands) {
    return allBands.filter(ecr => ecr.Multiplier !== null);
  }

  getBandDRings(allBands) {
    return allBands.filter(ecr => ecr.TolerancePercent !== null);
  }
}

export default LookupService;
