import {Component, OnInit} from '@angular/core';
import {Survey} from "../types/Survey";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  statuses: string[] = ['All', 'Active', 'Completed'];
  categories: string[] = ['Development', 'Workplace', 'Hardware'];
  filteredList: Survey[];
  selectedStatus: string = '';
  selectedCategory: string ='';

  status = 'status';
  category = "category";

  surveyList: Survey[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    }
  ]

  ngOnInit() {
    this.filteredList = this.surveyList;
  }

  onFilterSelected(filter: string, type: string) {
    if(type === 'status') {
      if(filter !== 'All') {
        this.filteredList = this.selectedCategory.length > 0 ? 
          this.surveyList.filter(s => s.status === filter && this.category === this.selectedCategory) 
          : this.surveyList.filter(s => s.status === filter);
        this.selectedStatus = filter;
      } else {
        
      this.selectedStatus = '';
        this.filteredList = this.selectedCategory.length > 0 ?
           this.surveyList.filter(s => s.category === this.selectedCategory) 
           : this.surveyList;
      }
     
    } else {
      this.selectedCategory = filter;
      if(this.selectedStatus.length > 0) {
        this.filteredList = filter.length > 0 ? 
          this.surveyList.filter(s => s.status === this.selectedStatus &&  s.category === filter)
          : this.surveyList.filter(s => s.status === this.selectedStatus);
      } else {
        this.filteredList = filter.length > 0 ? 
          this.surveyList.filter(s =>  s.category === filter)
          : this.surveyList;
      }
    }

   
  }
}
