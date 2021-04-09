import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TaskService } from '../../services/task.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  calendarItems$: Observable<CalendarItem[]>;
  month: number;
  year: number;
  today: Date = new Date();

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.calendarItems$ = this.getMonthCalendarItemsByDate(this.today);
  }

  private getMonthCalendarItemsByDate(date: Date): Observable<CalendarItem[]> {

    return this.taskService.getStats(+this.month + 1, this.year)
      .pipe(
        map(res => {

          const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
          const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
          const dates: CalendarItem[] = [];

          for (let i = firstDay.getDay(); i > 0; i--) {
            const before = new Date(firstDay.getTime());
            before.setDate(firstDay.getDate() - i);
            dates.push({
              date: before.getDate(),
              classList: 'other-month',
            });
          }

          for (let i = 1; i <= lastDay.getDate(); i++) {
            const classList = [];

            if (res[i] >= 0.4) {
              classList.push('_done-4');
            } else if (res[i] >= 0.7) {
              classList.push('_done-7');
            } else if (res[i] === 1) {
              classList.push('_done-10');
            }

            if (this.isToday(i)) {
              classList.push('today');
            }

            dates.push({
              date: i,
              classList: classList.join(' '),
            });
          }

          for (let i = 1; lastDay.getDay() + i < 7; i++) {
            const after = new Date(lastDay.getTime());
            after.setDate(lastDay.getDate() + i);
            dates.push({
              date: after.getDate(),
              classList: 'other-month',
            });
          }

          return dates;
        }),
      );


  }

  private isToday(date: number) {
    return this.today.getDate() === date
      && this.today.getMonth() === this.month
      && this.today.getFullYear() === this.year;
  }

  updateCalendar() {
    this.calendarItems$ = this.getMonthCalendarItemsByDate(new Date(this.year, this.month));
  }
}


type CalendarItem = {
  date: number;
  classList: string;
}
