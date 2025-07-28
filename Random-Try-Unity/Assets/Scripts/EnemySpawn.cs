using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawn : MonoBehaviour {

    private float spawnEnemy = 2f;
    private float x;
    public GameObject enemy;
    private GameObject mainCamera;
    private GameObject player;

	// Use this for initialization
	void Start () {
        mainCamera = GameObject.FindWithTag("MainCamera");
        player = GameObject.FindWithTag("Player");
        x = spawnEnemy;
    }
	
	// Update is called once per frame
	void Update ()
    {
        if(player.GetComponent<SpriteRenderer>().flipX == true)
        {
            transform.position = new Vector3(mainCamera.transform.position.x - 10, 0, 0);
        } else
        {
            transform.position = new Vector3(mainCamera.transform.position.x + 10, 0, 0);
        }

        if(transform.position.x > 17)
        {
            transform.position = new Vector3(transform.position.x - 20, 0, 0);
        } else if(transform.position.x < -17)
        {
            transform.position = new Vector3(transform.position.x + 20, 0, 0);
        }
        
    }

    private void FixedUpdate()
    {
        x -= Time.deltaTime;

        if(x <= 0)
        {
            Instantiate(enemy, transform.position, transform.rotation);
            x = spawnEnemy;
        }
    }
}
