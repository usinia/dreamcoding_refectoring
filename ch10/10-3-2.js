export function adjustedCapital(instrument) {
  if (!isEligibleForAdjustedCapital()) {
    return 0;
  }

  return (
    (instrument.income / instrument.duration) * instrument.adjustmentFactor
  );
}

function isEligibleForAdjustedCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  );
}
