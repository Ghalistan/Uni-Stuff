using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreControl : MonoBehaviour {

    Text scoreboard;
    public static int score;

    private void Awake()
    {
        score = 0;
    }

    // Use this for initialization
    void Start () {
        scoreboard = GetComponent<Text>();
	}
	
	// Update is called once per frame
	void Update () {
        var x = score.ToString();
        scoreboard.text = x.PadLeft(x.Length + (-(x.Length) + 7), '0');
	}
}
