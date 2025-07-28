using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gameplay : MonoBehaviour {

    Animator UI;
    GameObject Player;

	// Use this for initialization
	void Start () {
        UI = GameObject.FindWithTag("UI").GetComponent<Animator>();
        Player = GameObject.FindWithTag("Player");
	}
	
	// Update is called once per frame
	void Update () {
		if(HeartControl.heartNum <= 0)
        {
            UI.SetTrigger("GameOver");
            Player.GetComponent<PlayerController>().enabled = false;
        }
	}
}
