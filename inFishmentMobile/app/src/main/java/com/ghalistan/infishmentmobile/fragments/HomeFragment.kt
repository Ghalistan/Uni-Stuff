package com.ghalistan.infishmentmobile.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import com.ghalistan.infishmentmobile.adapters.HomeInfoPromoAdapter
import com.ghalistan.infishmentmobile.adapters.HomeProyekAdapter
import com.ghalistan.infishmentmobile.databinding.FragmentHomeBinding
import com.ghalistan.infishmentmobile.databinding.ItemInfoPromoBinding
import com.ghalistan.infishmentmobile.utils.proyek

class HomeFragment : Fragment() {
    private var _binding: FragmentHomeBinding? = null
    private val binding
        get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        _binding = FragmentHomeBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.rvRekomendasiProyek.apply {
            layoutManager = GridLayoutManager(activity,3)
            setHasFixedSize(true)
            adapter = HomeProyekAdapter(proyek)
        }

        binding.rvInfoPromo.apply {
            layoutManager = LinearLayoutManager(activity, LinearLayoutManager.HORIZONTAL, false)
            setHasFixedSize(true)
            adapter = HomeInfoPromoAdapter()
        }
    }
}