import settings from '@/settings.json'

export default class ListApi {
    protected serverURL = settings.serverURL

    getList = async () => {
        const response = fetch(`${this.serverURL}/new-research-add`)
            .then((response) => response.json())
            .catch((error) => console.error('Error:', error))

        return response
    }

    addListItem = async (newResearch: FormData) => {
        fetch(`${this.serverURL}/new-research-add`, {
            method: 'POST',
            body: newResearch,
        }).catch((error) => console.error('Error:', error))
    }
}
