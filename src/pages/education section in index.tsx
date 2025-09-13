
      {/* Education Section */}
      <section className={`py-20 px-4 fade-in-section ${visibleSections.has('education') ? 'visible' : ''}`} data-section="education">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 transition-all duration-300 hover:bg-card/50" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
                      <p className="text-primary font-medium mb-1">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Above Experience Section But below Skills Section */}
