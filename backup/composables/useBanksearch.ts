export default function () {
  async function fetchBankInformation(iban: string): Promise<BankInformation> {
    const rawIban = iban.replace(/\s/g, "");

    if (rawIban.length !== 22) {
      return;
    }

    // TODO: feature envy? srp? we shouldn't update store
    //       and validator from generic composable function
    // this.$store.commit('members/registration/updateIBAN', { iban: rawIban })
    // this.validator.iban.$touch()

    const response = await fetch(`/api/bank?iban=${rawIban}`);
    return response.json();
  }

  return {
    fetchBankInformation,
  };
}

export type BankInformation = {
  bankName: BankName;
  bic: Bic;
};

type Bic = {
  value: string;
};

type BankName = {
  shortName: string;
};
