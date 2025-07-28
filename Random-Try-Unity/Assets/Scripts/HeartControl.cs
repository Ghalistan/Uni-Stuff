using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class HeartControl : MonoBehaviour {

    public static int heartNum;
    Image heart1;
    Image heart2;
    Image heart3;

    private void Awake()
    {
        heartNum = 3;
    }

    // Use this for initialization
    void Start () {
        heart1 = GameObject.FindWithTag("Heart1").GetComponent<Image>();
        heart2 = GameObject.FindWithTag("Heart2").GetComponent<Image>();
        heart3 = GameObject.FindWithTag("Heart3").GetComponent<Image>();
	}
	
	// Update is called once per frame
	void Update () {
        healthAmount();
	}

    void healthAmount()
    {
        switch (heartNum)
        {
            case 2:
                heart3.color = new Color32(0, 0, 0, 200);
                heart2.color = new Color32(255, 255, 255, 255);
                heart1.color = new Color32(255, 255, 255, 255);
                break;
            case 1:
                heart3.color = new Color32(0, 0, 0, 200);
                heart2.color = new Color32(0, 0, 0, 200);
                heart1.color = new Color32(255, 255, 255, 255);
                break;
            case 0:
                heart3.color = new Color32(0, 0, 0, 200);
                heart2.color = new Color32(0, 0, 0, 200);
                heart1.color = new Color32(0, 0, 0, 200);
                break;
            default:
                heart3.color = new Color32(255, 255, 255, 255);
                heart2.color = new Color32(255, 255, 255, 255);
                heart1.color = new Color32(255, 255, 255, 255);
                break;
        }
    }
}
