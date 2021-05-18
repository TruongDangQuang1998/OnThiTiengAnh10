package com.example.englishexampreparation.ui.login;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.englishexampreparation.MainActivity;
import com.example.englishexampreparation.R;
import com.example.englishexampreparation.ui.register.RegisterActivity;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;

import butterknife.BindView;
import butterknife.ButterKnife;

public class LoginActivity extends AppCompatActivity {

    @BindView(R.id.fieldLoginName)
    TextInputLayout fieldLoginName;

    @BindView(R.id.fieldPassword)
    TextInputLayout fieldPassword;

    @BindView(R.id.edtNameLogin)
    TextInputEditText edtNameLogin;

    @BindView(R.id.edtPassword)
    TextInputEditText edtPassword;

    @BindView(R.id.btnLogin)
    Button btnLogin;

    @BindView(R.id.btnRegister)
    Button btnRegister;

    @BindView(R.id.btnForgotPassword)
    Button btnForgotPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        ButterKnife.bind(this);

        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(LoginActivity.this, MainActivity.class));
            }
        });

        btnRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(LoginActivity.this, RegisterActivity.class));
            }
        });

        btnForgotPassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });
    }
}