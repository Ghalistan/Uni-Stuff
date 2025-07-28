package com.ghalistan.infishmentmobile.adapters

import androidx.fragment.app.Fragment
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.ghalistan.infishmentmobile.fragments.ItemPendanaanFragment

class PendanaanAdapter(fragment: Fragment) : FragmentStateAdapter(fragment) {
    override fun getItemCount(): Int  = 3

    override fun createFragment(position: Int): Fragment {
        return when (position) {
            0 -> ItemPendanaanFragment()
            1 -> ItemPendanaanFragment()
            2 -> ItemPendanaanFragment()
            else -> ItemPendanaanFragment()
        }
    }

}