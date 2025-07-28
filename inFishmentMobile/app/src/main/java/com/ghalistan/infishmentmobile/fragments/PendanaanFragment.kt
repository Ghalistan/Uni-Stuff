package com.ghalistan.infishmentmobile.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.ghalistan.infishmentmobile.R
import com.ghalistan.infishmentmobile.adapters.PendanaanAdapter
import com.ghalistan.infishmentmobile.databinding.FragmentPendanaanBinding
import com.google.android.material.tabs.TabLayoutMediator

class PendanaanFragment : Fragment() {
    private var _binding: FragmentPendanaanBinding? = null
    private val binding
        get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        _binding = FragmentPendanaanBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.pager.adapter = PendanaanAdapter(this)
        TabLayoutMediator(binding.tabLayout, binding.pager) { tab, position ->
            when (position) {
                0 -> tab.text = "Dibuka"
                1 -> tab.text = "Sedang Berjalan"
                2 -> tab.text = "Selesai"
            }
        }.attach()
    }
}