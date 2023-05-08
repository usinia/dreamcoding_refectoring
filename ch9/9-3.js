// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  set discount(value) {
    const old = this._discount;
    this._discount = value;
    // this._discountedTotal += old - value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._adjustments.reduce((sum, a) => (sum += a.amount), 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    // this._production += adjustment.amount;
  }
}
