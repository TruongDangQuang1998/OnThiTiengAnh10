package com.example.englishexampreparation.ui.main.vocabulary;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.englishexampreparation.R;

/**
 * A simple {@link Fragment} subclass.
 * create an instance of this fragment.
 */
public class VocabularyFragment extends Fragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_vocabulary, container, false);

        return view;
    }
}