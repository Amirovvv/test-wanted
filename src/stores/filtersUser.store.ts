import { defineStore } from "pinia";
import { ScoreFilter } from "@/types/types";

export const useFiltersStore = defineStore("filtersStore", {
  state: () => ({
    filterCountry: {
      list: [{ value: 'Russia' }, { value: 'Usa' }],
      value: 'Filter by country',
    },
    filterScore: {
      list: [{ value: '>20', item: { score: 20, extremeValue: 'max' }, }, {
        value: '<10', item: {
          score: 10,
          extremeValue: 'min'
        }
      }],
      value: 'Filter by score',
    },
    activeFilterCountry: '',
    activeFilterScore: ''
  }),
  actions: {
    updateFilterCountry(country: { value: string }): void {
      this.activeFilterCountry = country ? country.value : country;
    },
    updateFilterScore(score: ScoreFilter): void {
      this.activeFilterScore = score ? score.item : score;
    }
  },
})