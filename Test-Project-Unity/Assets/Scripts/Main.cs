using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Main : MonoBehaviour
{
    Button AddMultiplier, AddScore, DecreaseScore, ChangeUsername;
    Text ScorePanel, UsernamePanel, MultiplierPanel;
    InputField Username;
    int Score = 0, Multiplier = 1;

    // Start is called before the first frame update
    void Start()
    {
        AddMultiplier = GameObject.Find("Add Multiplier").GetComponent<Button>();
        AddMultiplier.onClick.AddListener(TambahMultiplier);


        AddScore = GameObject.Find("Add Score").GetComponent<Button>();
        AddScore.onClick.AddListener(TambahScore);

        DecreaseScore = GameObject.Find("Decrease Score").GetComponent<Button>();
        DecreaseScore.onClick.AddListener(KurangiScore);

        ChangeUsername = GameObject.Find("Change Username").GetComponent<Button>();
        ChangeUsername.onClick.AddListener(GantiUsername);

        ScorePanel = GameObject.Find("Score Panel").GetComponent<Text>();
        ScorePanel.text = "Score: " + Score;

        MultiplierPanel = GameObject.Find("Multiplier Panel").GetComponent<Text>();
        MultiplierPanel.text = "Multiplier: " + Multiplier;

        UsernamePanel = GameObject.Find("Username Panel").GetComponent<Text>();
        Username = GameObject.Find("Username Input").GetComponent<InputField>();
    }

    void TambahScore()
    {
        Score += Multiplier;
        ScorePanel.text = "Score: " + Score;
    }

    void KurangiScore()
    {
        Score -= Multiplier;

        if (Score < 0)
        {
            Score = 0;
        }

        ScorePanel.text = "Score: " + Score;
    }

    void GantiUsername()
    {
        if (Username.text != "")
        {
            UsernamePanel.text = Username.text;
            Username.text = "";
        } else
        {
            Debug.Log("Username Empty!");
        }
    }

    void TambahMultiplier()
    {
        Multiplier++;
        MultiplierPanel.text = "Multiplier: " + Multiplier;
    }
}
