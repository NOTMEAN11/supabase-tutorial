function THB(number: number) {
  return number.toLocaleString("th-TH", { style: "currency", currency: "THB" });
}

export { THB };
