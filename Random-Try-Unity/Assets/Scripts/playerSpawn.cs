using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerSpawn : MonoBehaviour {

    public GameObject player;
    public GameObject hitbox;

	// Use this for initialization
	void Start () {
        Instantiate(player);
        Instantiate(hitbox);
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
