import { ref } from "@nuxtjs/composition-api";
import BankApi from "~/api/bank"

export default function useBanksearch() {
    
    async function fetchBankInformationForIban(iban: string) {
        const rawIban = iban.replace(/\s/g, '')
    
        if (rawIban.length !== 22) {
          return
        }
    
        // this.$store.commit('members/registration/updateIBAN', { iban: rawIban })
        // this.validator.iban.$touch()
    
        const bankResponse = await new BankApi().getBankInformationByIban(rawIban)
    
        return {
            'bankName': bankResponse.data.bankName.shortName,
            'bic': bankResponse.data.bic.value

        }
    }

    return {
        fetchBankInformationForIban
    }
}