import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';
import { Classes } from 'src/app/models/classes';
import { Degrees } from 'src/app/models/degrees';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classes: Classes[];
  degrees: Degrees[];
  students: any[];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLegend = true;
  public barChartType: ChartType = 'line';
  public barChartLabels: Label[] = [];
  public barChartData: any[] = [{ data: [0, 0, 0, 0, 0, 0], label: 'Alunos' }];

  public barChartOptions2: ChartOptions = {
    responsive: true,
  };
  public barChartLegend2 = true;
  public barChartType2: ChartType = 'line';
  public barChartLabels2: Label[] = [];
  public barChartData2: any[] = [{ data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Alunos' }];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getClasses();
    this.getDegrees();
    this.getSudents();    
  }
  
  async getSudents() {
    this.appService.getAllStudents().subscribe((res: any[]) => {
      this.students = res; 
      setTimeout(() => {
        this.setStudentsChartClass(this.students);
        this.setStudentsChartDegrees(this.students);
      }, 1000);
    });
  }
  
  setStudentsChartClass(student){
    this.classes.forEach( item => {
      this.barChartLabels.push(`Classe ${item.name}`);
    }) 
    let turmaA = student.filter(c => c.classId == '1');
    let turmaB = student.filter(c => c.classId == '2');
    let turmaC = student.filter(c => c.classId == '3');
    let turmaD = student.filter(c => c.classId == '4');
    let turmaE = student.filter(c => c.classId == '5');
    let turmaF = student.filter(c => c.classId == '6');
    this.chart.chart.data.datasets[0].data = [
      turmaA.length,
      turmaB.length,
      turmaC.length,
      turmaD.length,
      turmaE.length,
      turmaF.length
    ]
    this.chart.chart.update()
  }
  setStudentsChartDegrees(student){
    this.degrees.forEach( item => {
      this.barChartLabels2.push(`${item.name}`);
    }) 
    let turma1 = student.filter(c => c.degreeId == '1');
    let turma2 = student.filter(c => c.degreeId == '2');
    let turma3 = student.filter(c => c.degreeId == '3');
    let turma4 = student.filter(c => c.degreeId == '4');
    let turma5 = student.filter(c => c.degreeId == '5');
    let turma6 = student.filter(c => c.degreeId == '6');
    let turma7 = student.filter(c => c.degreeId == '7');
    let turma8 = student.filter(c => c.degreeId == '8');
    let turma9 = student.filter(c => c.degreeId == '9');
    let turma10 = student.filter(c => c.degreeId == '10');
    let turma11 = student.filter(c => c.degreeId == '11');
    let turma12 = student.filter(c => c.degreeId == '12');
    let turma13 = student.filter(c => c.degreeId == '13');    

    this.barChartData2[0].data = [
      turma1.length,
      turma2.length,
      turma3.length,
      turma4.length,
      turma5.length,
      turma6.length,
      turma7.length,
      turma8.length,
      turma9.length,
      turma10.length,
      turma11.length,
      turma12.length,
      turma13.length
    ]
    this.chart.chart.update();
    
  }
  async getClasses() {
    this.appService.getAllClasses().subscribe((res: any[]) => {
      this.classes = res;           
    });
  }
  async getDegrees() {
    this.appService.getAllDegrees().subscribe((res: Degrees[]) => {
      this.degrees = res;
    });
  }

}
