import requests
import json


def getTopicCount(topic):
    url = f"https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page={topic}"
    response = requests.get(url)

    if response.status_code != 200:
        print("Erreur : Impossible de récupérer les données de l'API Wikipédia")
        return

    data = json.loads(response.text)
    text = data['parse']['text']['*']

    topic_count = text.lower().count(topic.lower())
    print(topic_count)


getTopicCount("fleur")
