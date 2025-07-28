using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class hitboxposition : MonoBehaviour {

    private GameObject parent;

	// Use this for initialization
	void Start () {
        parent = GameObject.FindWithTag("Player");
    }
	
	// Update is called once per frame
	void Update () {
        Physics2D.IgnoreCollision(GetComponent<Collider2D>(), parent.GetComponent<Collider2D>(), true);

        if (parent.GetComponent<SpriteRenderer>().flipX == false)
        {
            transform.position = new Vector3(parent.transform.position.x + (float)1.05, transform.position.y, transform.position.z);
        } else
        {
            transform.position = new Vector3(-(float)1.05 + parent.transform.position.x, transform.position.y, transform.position.z);
        }
	}
}
