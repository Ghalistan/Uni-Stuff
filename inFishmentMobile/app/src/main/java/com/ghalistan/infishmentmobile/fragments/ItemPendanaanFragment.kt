package com.ghalistan.infishmentmobile.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import com.ghalistan.infishmentmobile.R
import com.ghalistan.infishmentmobile.adapters.ItemPendanaanAdapter
import com.ghalistan.infishmentmobile.databinding.FragmentItemPendanaanBinding

class ItemPendanaanFragment : Fragment() {
    private var _binding: FragmentItemPendanaanBinding? = null
    private val binding
        get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        _binding = FragmentItemPendanaanBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.rvPendanaanProyek.apply {
            layoutManager = LinearLayoutManager(activity)
            setHasFixedSize(true)
            adapter = ItemPendanaanAdapter()
        }
    }
}