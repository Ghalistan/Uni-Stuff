package zhega.andro.main.hookelaw;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import java.text.DecimalFormat;

public class Main extends Activity implements View.OnClickListener {
    private EditText massTxt;
    private EditText constantTxt;
    private EditText fpsTxt;
    private static final int RANDOM = 1;
    private static final int ABOUT = 2;
    private DecimalFormat formatter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        massTxt = findViewById(R.id.mass);
        constantTxt = findViewById(R.id.constant);
        fpsTxt = findViewById(R.id.fps);
        findViewById(R.id.run).setOnClickListener(this);
        formatter = new DecimalFormat("#.##");
        formatter.setMaximumFractionDigits(2);
    }

    public void onClick(View view) {
        try {
            float mass = Float.parseFloat(massTxt.getText().toString());
            float constant = Float.parseFloat(constantTxt.getText().toString());
            float fps = Float.parseFloat(fpsTxt.getText().toString());
            if (fps > 30 || fps < 5) {
                Toast.makeText(this, "Masukkan FPS antara 5 s/d 30", Toast.LENGTH_SHORT).show();
                return;
            }

            Intent intent = new Intent(this, Hooke.class);
            intent.putExtra(Hooke.MASS, mass);
            intent.putExtra(Hooke.CONSTANT, constant);
            intent.putExtra(Hooke.FPS, fps);
            System.out.println("constant "+constant);
            startActivity(intent);
        } catch (NumberFormatException e) {
            Toast.makeText(this, "Isi semua kolom yang diberikan", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        menu.add(0, RANDOM, Menu.FIRST, "Randomisasi").setIcon(R.drawable.random);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case RANDOM:
                massTxt.setText(formatter.format(Math.random()*100));
                constantTxt.setText(formatter.format(Math.random() * 20));
                fpsTxt.setText("30");
                break;
            case ABOUT:
                showDialog(0);
                break;
        }
        return super.onOptionsItemSelected(item);
    }
}
