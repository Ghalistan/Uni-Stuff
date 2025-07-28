using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour {

    //Gameplay related
    private bool impact; //Check if get hit by player
    private bool Moving = true; //To Chase Player
    private bool CD = false; //Stop moving after damaging player
    private bool dead = false; //check if health is < 0
    private float coolD = 2f; //amount of time to stop moving;
    public int Health; //amount of hit before ded
    public int scoreValue = 100; //amount of score given by defeating this.

    //calling component
    private Rigidbody2D rb;
    private SpriteRenderer spriteR;

    //outsider component
    private GameObject player;
    private GameObject hitbox;

    // Use this for initialization
    void Start () {
        rb = GetComponent<Rigidbody2D>();
        spriteR = GetComponent<SpriteRenderer>();
        player = GameObject.FindWithTag("Player");
        hitbox = GameObject.FindWithTag("Hitbox");
    }
	
	// Update is called once per frame
	void Update ()
    {
        floor();

        transform.Rotate(0, 0, 0);

        if(CD == true)
        {
            coolD -= Time.deltaTime;
            if(coolD <= 0)
            {
                coolD = 2f;
                Moving = true;
                CD = false;
            }
        }

        if(dead == true)
        {
            ScoreControl.score += scoreValue;
            Destroy(gameObject);
        }
	}

    void FixedUpdate()
    {
        if(Moving == true)
        {

            if (player.transform.position.x < transform.position.x)
            {
                spriteR.flipX = false;
                transform.Translate(-1 * Time.deltaTime * 2f, 0, 0);
            } else
            {
                spriteR.flipX = true;
                transform.Translate(1 * Time.deltaTime * 2f, 0, 0);
            }
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if(collision.gameObject.tag == "Hitbox")
        {
            if(spriteR.flipX == false) {
                rb.velocity = new Vector2(4, 4);
                impact = true;
            } else
            {
                rb.velocity = new Vector2(-4, 4);
                impact = true;
            }
            Physics2D.IgnoreCollision(GetComponent<Collider2D>(), hitbox.GetComponent<Collider2D>(), true);
            Physics2D.IgnoreCollision(GetComponent<Collider2D>(), player.GetComponent<Collider2D>(), true);
        }
        
        if(impact == true)
        {
            if(collision.gameObject.tag == "Floor")
            {
                rb.velocity = new Vector2(0, 0);
                Health -= 1;
                
                if(Health <= 0)
                {
                    dead = true;
                } else
                {
                    Physics2D.IgnoreCollision(GetComponent<Collider2D>(), hitbox.GetComponent<Collider2D>(), false);
                    Physics2D.IgnoreCollision(GetComponent<Collider2D>(), player.GetComponent<Collider2D>(), false);
                }
            }
        }

        if(collision.gameObject.tag == "Player")
        {
            Moving = false;
        }
    }

    private void OnCollisionExit2D(Collision2D collision)
    {
        if(collision.gameObject.tag == "Player")
        {
            CD = true;
        }
    }

    //Keep character above floor
    void floor()
    {
        if (transform.position.y < -2.2)
        {
            transform.position = new Vector3(transform.position.x, (float)-2.2, (float)0);
        }
    }
}
