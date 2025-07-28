using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour {
    
    //gameplay limiter
    public int JumpCount = 2;

    public float pMax, pMin;
    private float Locked = 0.5f;

    private bool damaged = false;
    private bool Stop = false;

    //component call
    private Animator animator;
    private SpriteRenderer SpriteR;
    private Rigidbody2D rb;

    //outsider component
    private GameObject hitbox;

    // Use this for initialization
    void Start () {
        hitbox = GameObject.FindWithTag("Hitbox");
        animator = GetComponent<Animator>();
        SpriteR = GetComponent<SpriteRenderer>();
        rb = GetComponent<Rigidbody2D>();
        Physics2D.IgnoreCollision(GetComponent<Collider2D>(), hitbox.GetComponent<Collider2D>(), true);
    }

    void Update()
    {
        floor();

        if(Stop == true)
        {
            Locked -= Time.deltaTime;
            if(Locked <= 0)
            {
                damaged = false;
                Locked = 0.5f;
                Stop = false;
            }
        }
    }

    void FixedUpdate () {
        if (damaged == false)
        {
            Movement();
            Jumping();
            Attack();
            checkAnim();
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if(collision.gameObject.tag == "Floor")
        {
            if(damaged == true)
            {
                rb.velocity = new Vector2(0, 0);
                animator.enabled = true;
                animator.SetBool("PlayerJump", false);
                animator.SetBool("PlayerWalk", false);
                Stop = true;
            }
            animator.SetBool("PlayerJump", false);
            JumpCount = 2;
        }

        if(collision.gameObject.tag == "Enemy")
        {
            damaged = true;
            animator.enabled = false;
            if(SpriteR.flipX == false)
            {
                rb.velocity = new Vector2(-4, 5);
            } else
            {
                rb.velocity = new Vector2(4, 5);
            }
            HeartControl.heartNum -= 1;
        }
    }

    private void checkAnim()
    {
        if(animator.GetCurrentAnimatorStateInfo(0).IsName("PlayerAttack") == false)
        {
            hitbox.GetComponent<Collider2D>().enabled = false;
        }
    }

    void Movement()
    {
        //Horizontal Moving
        var x = Input.GetAxisRaw("Horizontal") * Time.deltaTime * 7f;

        transform.Translate(x, 0, 0);

        if (x > 0)
        {
            SpriteR.flipX = false;
            animator.SetBool("PlayerWalk", true);
        }
        else if (x < 0)
        {
            SpriteR.flipX = true;
            animator.SetBool("PlayerWalk", true);
        }
        else
        {
            animator.SetBool("PlayerWalk", false);
        }
    }

    void Jumping()
    {
        //Jumping
        if (Input.GetKeyDown("space"))
        {
            if (JumpCount > 0)
            {
                //rb.AddForce(new Vector2(0, 5), ForceMode2D.Impulse);
                rb.velocity = new Vector2(0, 5);
                animator.SetBool("PlayerJump", true);
                JumpCount--;
            }
        }
    }

    void Attack()
    {
        var x = Input.GetAxisRaw("Fire1");
        if(x == 1)
        {
            animator.SetTrigger("PlayerAttack");
            hitbox.GetComponent<Collider2D>().enabled = true;
        }
    }

    //Keep the player floating above floor
    void floor()
    {
        if (transform.position.y < -1.8)
        {
            transform.position = new Vector3(transform.position.x, (float)-1.8, 0);
        }
    }
}
