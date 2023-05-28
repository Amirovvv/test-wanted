import { defineStore } from "pinia";
import { api } from "@/api/api"
import { UserItemType } from "@/types/types";

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [] as UserItemType[],
    isLoading: false
  }),
  actions: {
    async getUsers(): Promise<void> {
      try {
        this.isLoading = true
        const response = await api.get('users.json');
        this.users = response.data
      } catch (error) {
        throw new Error('Failed to fetch users')
      } finally {
        this.isLoading = false
      }
    },
  },
})