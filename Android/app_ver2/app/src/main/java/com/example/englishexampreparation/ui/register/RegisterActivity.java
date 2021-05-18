package com.example.englishexampreparation.ui.register;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.example.englishexampreparation.R;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;

import butterknife.BindView;

public class RegisterActivity extends AppCompatActivity {

    @BindView(R.id.fieldFullName)
    TextInputLayout fieldFullName;

    @BindView(R.id.fieldPassword)
    TextInputLayout fieldPassword;

    @BindView(R.id.edtFullName)
    TextInputEditText edtFullName;

    @BindView(R.id.edtPassword)
    TextInputEditText edtPassword;

    @BindView(R.id.btnNextView)
    FloatingActionButton btnNext;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
    }
}