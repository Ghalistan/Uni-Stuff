using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMovement : MonoBehaviour {

    private GameObject player;
    public float xMin, xMax;

	// Use this for initialization
	void Start () {
        player = GameObject.FindWithTag("Player");
	}

    // Update is called once per frame
    void Update() {

        var x = player.transform.position.x;

        if (x >= xMin && x <= xMax)
        {
            transform.position = new Vector3(x, 0, -10);
        }
	}
}
